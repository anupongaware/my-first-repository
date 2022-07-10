/**
 * <--------------------------- GIT --------------------------->
 *
 *  - Lesson1: OVERVIEW
 *
 *  1. software ที่ช่วยจัดการเวอร์ชั่น (version control system) ของโค้ด ที่เรียนเขียน
 *  2. feature เด่น ได้แก่  branching ช่วยจัดการเวอร์ชั่น ช่วยในการแบ่งงาน  , fast = รวดเร็ว , Distrubuted =
 *  3. git architecture => ตอนแรก เราจะอัพงาน ไปยัง server เรียกว่า "Remote Repo"    แต่ถ้า clone มา จะดาวน์โหลดงานทุกเวอร์ชั่นใส่ไว้ในเครื่อง และ ใส่ไว้ใน local reprodirectory ทำให้ทำงานในโหลด offline ได้
 *     และทำ git ทำงานได้รวดเร็วขึ้น
 *  4. Real world git usage and benefits =>
 *        4.1. version control = จะจัดเก็บงานเป็น เวอร์ชั่นๆ มีชื่อ มีเวลา บอกด้วย, มี backup file และสามารถ Restore ไฟล์กลับมาได้ , สามารถ เพิ่ม ข้อความ ใน commit message ได้
 *        4.2. Collaboration = สามารถทำงานใน เครืองตัวเองได้ , ช่วยในการ เชื่อมแต่ละไฟล์ เข้าด้วยกัน
 *        4.3. Automation = สามารถ buid, test, deploy
 *
 *
 * - Lesson2: Using Git Locally
 *  1. common terms
 *       - Commit => N. เวอร์ชั่นหนึ่งของ source code ต้องใช้ commit id
 *                   V. การสร้าง commit สร้าง commit ใหม่ขึ้นมา
 *                   commit จะเป็นการ สแนปช็อต
 *
 *       -Working directory => คือ โฟลเดอร์ที่เราทำงาน
 *                   - Clean ไม่มีการเปลี่ยนแปลง
 *                   - Dirty มีการเปลี่ยนแปลง
 *
 *       -Staging area => คือ อาจจะเรียกว่า "Index"  บริเวณที่เราจะประกอบ commit อันใหม่ ขึ้นมาก่อนที่เอาไปเก็บ
 *                           ใช้แบ่งการเปลี่ยนแปลง ออกเป็นหลายๆ commit ได้
 *
 *       -Repository => คือ พื้นที่ที่ใช้เก็บงาน ทุกๆ commit หรือเก็บ branch ต่างๆ จะแบ่งออกเป็น 2 repo
 *                          -Local repository,     -Remote repository
 *
 *
 * 2. Common Git Usage & commands (การใช้งาน git เบื้องต้น)
 *        -สร้าง new repo ---> จากนั้น แก้ไขไฟล์ (dirty working area) ----> stage file  ----> commit
 *
 *        -ตอนแรกเราจะสร้าง repository ก่อน โดยใช้  "git init"
 *
 *        -ต่อมาจะแก้ไข ไฟล์ต่าง   การเปลี่ยนแปลงจะแบ่งออกเป็น 4 ประเภท  1. A (Add new file) 2. M (Modify existing file) 3. Move/Rename existing file 4. D (Delete existing file)
 *
 *        -ก่อนการเปลี่ยนแปลง เวอร์ชั่นใหม่ ต้องนำไฟล์ไปไว้ใน staging area ก่อน โดยใช้ คำสั่ง "git add <filename>"
 *
 *        -บางครั้งเพิ่มไฟล์เกิน สามารถใช้คำสั่ง "git reset" หรือ "git restore"
 *
 *        -สุดท้ายเราจะสร้าง commit อันใหม่ขึ้นมา เราจะใช้คำสั่ง "git commit"
 *
 * ddd
 *
 *
 *
 */
