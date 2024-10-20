import makeWASocket, {
    DisconnectReason,
    useMultiFileAuthState,
} from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";
let Connection;
async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState("cache");
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
    });
    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === "close") {
            const shouldReconnect =
                (lastDisconnect?.error as Boom)?.output?.statusCode !==
                DisconnectReason.loggedOut;
            console.log(
                "connection closed due to ",
                lastDisconnect?.error,
                ", reconnecting ",
                shouldReconnect
            );
            if (shouldReconnect) {
                connectToWhatsApp();
            }
        } else if (connection === "open") {
            console.log("opened connection");
        }
    });
    sock.ev.on("messages.upsert", async (m) => {
        const messages = m.messages[0];
    });
    sock.ev.on("creds.update", saveCreds);
    Connection = sock;
}

function messagesSender(number, text) {
    Connection?.sendMessage(`${number}@s.whatsapp.net`, { text });
}

export { connectToWhatsApp, messagesSender };
