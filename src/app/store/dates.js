import axios from "axios";

export const getDateOnline = async () => {
  try {
    const response = await axios.get('http://worldtimeapi.org/api/timezone/Asia/Jakarta');
    const now = new Date(response.data.datetime);
    const jam = now.getHours();
    const menit = now.getMinutes();
    return `${jam}:${menit}`;
  } catch (error) {
    console.error("Gagal mengambil waktu online:", error);
    return null;
  }
}