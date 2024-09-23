# Ôn luyện các câu hỏi phỏng vấn

## Câu 1: What are the possible ways to create objects in JavaScript? (Các cách có thể tạo object là gì?)

1. Object literal syntax
2. Object constructor
3. Function constructor
4. ES6 Class

---

## Câu 2: What is a prototype chain? (Chuỗi nguyên mẫu là gì?)

**Trả lời:** Prototype chain là chuỗi prototype cho phép các đối tượng kế thừa thuộc tính và phương thức từ đối tượng khác.

---

### Bài tập về prototype

#### Đề bài 1: Quản lý thư viện sách

1. Xây dựng một chương trình quản lý các đối tượng sách trong thư viện bằng cách sử dụng prototype. Mỗi cuốn sách có các thông tin như tên sách, tác giả và thể loại.
2. Dùng prototype để định nghĩa một phương thức `getSummary` trả về một chuỗi giới thiệu về cuốn sách.
3. Dùng prototype để định nghĩa thêm phương thức `changeGenre` cho phép bạn thay đổi thể loại của cuốn sách.
4. Tạo vài đối tượng sách và hiển thị tóm tắt của chúng.

---

#### Đề bài 2: Quản lý động vật trong sở thú

1. Tạo một lớp cơ sở **Animal** với các thuộc tính `name`, `age`, `species`.
2. Tạo các lớp kế thừa **Mammal** và **Bird** với các thuộc tính và phương thức tương ứng.
3. Tạo các đối tượng cho từng loại động vật và hiển thị thông tin về chúng.

---

## Câu 3: What is the difference between Call, Apply and Bind? (Sự khác biệt giữa Call, Apply và Bind)

**Trả lời:**

- **Call**: Cho phép bạn mượn phương thức của một hàm khác và gọi nó với một ngữ cảnh (`this`) cụ thể, truyền các tham số dưới dạng danh sách.
- **Apply**: Tương tự như `call`, nhưng bạn truyền các tham số dưới dạng mảng.
- **Bind**: Tạo ra một hàm mới với ngữ cảnh (`this`) cố định mà không gọi hàm ngay lập tức.

---

## Câu 4: What is JSON and its common operations? (JSON là gì và các hoạt động phổ biến của nó)

**Trả lời**:

- JSON (JavaScript Object Notation) là định dạng dữ liệu nhẹ và dễ đọc, thường được sử dụng để trao đổi dữ liệu giữa client và server. JSON được viết ở dạng key-value.

---

## Câu 5: What is the purpose of the array splice method? (Mục đích của phương thức splice trong mảng là gì?)

**Trả lời:** `splice` được sử dụng để thêm hoặc xóa các phần tử trong mảng tại một vị trí nhất định và có thể làm thay đổi mảng gốc.

---

## Câu 6: What is the difference between slice and splice? (Sự khác biệt giữa slice và splice?)

**Trả lời**:

- **Slice**: Dùng để lấy ra một phần của mảng mà không làm thay đổi mảng gốc.

- **Splice**: Dùng để thêm hoặc xóa phần tử trong mảng và làm thay đổi mảng gốc.

---

## Câu 8: How do you compare Object and Map(làm thế nào để bạn so sánh giữa Object và Map)

**Trả lời**:

- Object: thì có thể sử dụng kế thừa prototype và kiểu key là symbol và lặp bằng for in để lấy ra phần tử

- Map: thì không thể sử dụng được kế thừa prototype và kiểu key đa dạng như string, number, symbol, object hầu hết là được hết các kiểu dữ liệu, và sử dụng for of để lặp qua phần tử hoặc forEach, và có thể thuận tiện cho việc thêm và xoá thường xuyên

## Câu 9: What is the difference between == and === operators (sự khác biệt giữa == và ===)

**Trả lời**:

- ==: thì tính nghiêm ngặc của nó không tốt nó không phân biệt được kiểu dữ liệu

- ===: tính nghiêm ngặc cao và có thể phân biệt được kiểu dữ liệu

## Câu 10: What are lambda expressions or arrow functions (Biểu thức lambda và hàm Arrow functions là gì?)

**Trả lời**:

- Arrow function cú pháp ngắn gọn hơn named function thay vào đó Arrow chỉ cần => và không thể sử dụng được argument thay vào đó có thể sử dụng paramters, không sử dụng được contructor

## Câu 11: What is a first class function

**Trả lời** :

- là gán biến cho 1 hàm sau đó truyền đối số sẽ trả kết quả vào hàm mới

---

## Câu 12: What is a first order function

**Trả lời** :

- nó không nhận các hàm khác tham số và chỉ trả ra kết quả ở phạm vi của chính nó thôi

---

## Câu 13: What is a higher order function?

**Trả lời**:

- A higher-order function (Hàm bậc cao) là một hàm có thể nhận một hoặc nhiều hàm khác làm tham số, hoặc trả về một hàm khác. Điều này cho phép ta viết các đoạn mã linh hoạt và dễ mở rộng hơn.

---

### Đề bài về Higher-Order Function: Quản lý danh sách sinh viên

Bạn được giao nhiệm vụ quản lý danh sách sinh viên của một lớp học. Danh sách sinh viên được lưu trữ dưới dạng một mảng các đối tượng, mỗi đối tượng chứa các thông tin sau:

- `name`: Tên sinh viên.
- `age`: Tuổi sinh viên.
- `grades`: Mảng điểm của sinh viên (bao gồm nhiều môn học).

Hãy viết một hàm **higher-order function** có tên `processStudents`. Hàm này sẽ nhận vào hai tham số:

- `students`: Mảng đối tượng sinh viên.
- `callback`: Một hàm sẽ được áp dụng cho từng sinh viên trong danh sách.

---

### Yêu cầu:

Dùng `processStudents` để thực hiện các tác vụ sau:

1. **Tính tuổi trung bình** của tất cả sinh viên trong danh sách.
2. **Tìm sinh viên có điểm trung bình cao nhất**.
3. **Tạo danh sách** các sinh viên có điểm trung bình lớn hơn hoặc bằng 8.0.

---

#### Cấu trúc đề xuất:

```javascript
// Hàm higher-order function: processStudents
function processStudents(students, callback) {
  return callback(students);
}

// Ví dụ tính toán cụ thể
```

## Câu 14: What is a unary function (Hàm đơn nhất là gì?)

**Trả lời** :

- là hàm duy nhất chỉ được truyền 1 tham số

---

## Câu 15: What is the currying function (Hàm currying?)

**Trả lời** :

- hàm này giúp ta có thể chia làm các hàm nhỏ và truyền vào 1 tham số

---

## Câu 16: What is a pure function (Hàm thuần?)

**Trả lời** :

- bỏ qua

---

## Câu 17: What is the purpose of the let keyword (Mục đích của từ khoá let là gì ?)

**Trả lời** :

- let: phạm vi khối(block scope) biến được khai báo chỉ tồn tại trong phạm vi khối bên trong cặp {}

---

## Câu 18: What is the difference between let and var (Sự khác biệt giữa let và var là gì ?)

**Trả lời** :

- let: có tính hoisting nhưng không thể sử dụng trước khi khai báo sẽ báo lỗi, phạm vi cục bộ,

- var: có phạm vi toàn cục, có tính hoisting không báo lỗi nhưng sẽ trả về underfine

---

## Câu 19: What is the reason to choose the name let as a keyword

**Trả lời** :

- let: việc lí do đặt tên let thfi không biết nhưng nói chung xài let ổn vì có thể đặt trùng tên và giá trị khác mà không bị phạm vi toàn cục như var

---

## Câu 20: How do you redeclare variables in a switch block without an error (làm cách nào để thay đổi lại các biến trong switch mà không gặp lỗi)

**Trả lời** :

- nên sử dụng const hoặc let vì có scope nhưng để thay đổi biến thì nên xài let vì const không thể thay đổi lại biến

---

## Câu 21: What is the Temporal Dead Zone

**Trả lời** :

- khi sử dụng const và let chạy lệnh trước khi khai báo sẽ bị lỗi

---

## Câu 22: What is an IIFE (Immediately Invoked Function Expression)

**Trả lời** :

- bỏ qua

---

## Câu 23: How do you decode or encode a URL in JavaScript? (Làm cách nào để giải mã hoặc mã hóa một URL trong JavaScript?)

**Trả lời** :

- khôgn biết

---

## Câu 24: What is memoization

**Trả lời** :

- khôgn biết

---

## Câu 25: What is Hoisting (hoisting là gì ? )

**Trả lời** :

- hoisting: là cơ chế mặc định của js để di chuyển các biến hoặc các hàm lên khi khai báo sẽ lên đầu scope trước khi chúng thực thi

---

## Câu 26: What are closures (cloures là gi ?)

**Trả lời** :

1. co thể truy cập các biến bên ngoài
2. có thể lưu trữ các biến
3. có thể tạo các hàm callback mà vẫn có quyền truy cập vào các biến phạm vi của hàm bao quanh

---
