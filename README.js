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
 *
 * 3. การใช้งาน Git History , Git Blame and Git Checke out
 *        - การใช้ Git History คือการใช้ "git log" แล้วดูว่า เรา commit ไปกี่ครั้งแล้ว
 *
 *        - Git blame คือการบอกรายละเอียดใน git len จะบอกว่ามี ใครเข้ามาแก้ไขบ้าง
 *
 *        - Git checke out คือการ ย้ายไปยัง commit ที่เราต้องการ หรือ commit ในอดีต
 *
 * 4. Git restore
 *
 *        - คือการ ยกเลิกการเปลี่ยนแปลง ให้ code กลับมาเป็นเหมือนเดิม โดยใช้คำสั่ง "git restore <filename>"
 *        - กู้ไฟล์มาออก จาก commit เก้าๆ ที่เคยลบไปแล้ว กลับมาได้
 *
 *
 *
 *
 *
 * - Lesson3: Remote and Collabation
 * 1. Branching
 *        branching คือ การแยกตัวออกมาจาก branch หลัก
 *        ประโยชน์  ช่วยในการจัดเก็บการเปลี่ยนแปลง
 *
 * 2. Git branch
 *        คือ pointer ที่ชี้ไปยัง commit commit หนึ่ง
 *
 *        การสร้าง branch ใหม่ขึ้นมา ได้แก่ "git branch <branch_name>"
 *
 *        หรือ การใช้ "git checkout -b <new_branch_name>" == create a branch then switch to it
 *
 *        ส่วนการเปลี่ยน branch จะใช้ "git checkout <branch_name>"
 *
 *        คำสั่งอื่นๆ "git branch" == list local branch,  "git branch -m" == rename current branch
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
