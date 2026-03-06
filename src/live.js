/* eslint-disable */
const { WebcastPushConnection } = require("tiktok-live-connector");

// ===== CONFIG =====
const STREAMER_USERNAME = "thanhdongian.dtt"; // <-- username livestream
const API_KEY = "euler_YjdkM2FlMDQxZTk1NWU1OWM2MzM2MjRkNTgwYjI0Yjk0YWNhNTRjNzMzMTUyYzYyYzE3YzFi";

// set API key cho Euler
process.env.EULER_API_KEY = API_KEY;

// ===== CONNECT =====
const tiktok = new WebcastPushConnection(STREAMER_USERNAME);

// connect livestream
tiktok.connect().then(state => {
    console.log("✅ Connected to room:", state.roomId);
}).catch(err => {
    console.error("❌ Connect failed:", err);
});


// ===== LISTEN COMMENTS =====
tiktok.on("chat", data => {
    const username = data.nickname;
    const comment = data.comment;

    console.log(`💬 ${username}: ${comment}`);

    // ===== AI AUTO REPLY PLACE =====
    autoReply(username, comment);
});


// ===== LIVE STATUS =====
tiktok.on("streamEnd", () => {
    console.log("🔴 Livestream ended.");
});


// ===== ERROR =====
tiktok.on("error", err => {
    console.error("⚠️ Error:", err);
});


// ===== AUTO REPLY FUNCTION =====
async function autoReply(user, message) {

    // ví dụ logic AI
    let reply = "";

    if (message.includes("giá")) {
        reply = "Sản phẩm đang giảm giá 20% hôm nay nhé!";
    } 
    else if (message.includes("ship")) {
        reply = "Shop hỗ trợ ship toàn quốc 🚚";
    } 
    else {
        return; // không trả lời nếu không match
    }

    console.log(`🤖 AI Reply -> ${user}: ${reply}`);

    // TODO: call API gửi reply
    // await sendReplyToLive(reply);
}