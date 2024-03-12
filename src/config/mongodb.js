/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { MongoClient, ServerApiVersion } from "mongodb";

let trelloDatabaseInstance = null;

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Kết nối với Database
export const CONNECT_DB = async () => {
  // Gọi kết nối tới MongoDB Atlas với URI đã khai báo khi khởi tạo biến client
  await client.connect();

  // Sau khi kết nối thành công thì lấy database theo tên và gán vào biến trelloDatabaseInstance
  trelloDatabaseInstance = client.db(DATABASE_NAME);
};

// function có tác dụng trả về Database sau khi kết nối thành công, để sử dụng nhiều nơi khác trong code
// chỉ sử dụng sau khi kết nối Database
export const GET_DB = () => {
  if (!trelloDatabaseInstance)
    throw new Error("Must connect to database first!");
  return trelloDatabaseInstance;
};
