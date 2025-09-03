const validateAssignment = (req, res, next) => {
    const { title, content, category, email } = req.body;
    //ตรวจสอบว่ามี field ครบ ตาม req หรือไม่
    const errors = [];
    //ตรวจสอบความถูกต้องของข้อมูล
    if (!title) errors.push("Title is required");
    if (!content) errors.push("Content is required");
    if (!category) errors.push("Category is required");
    if (!email) errors.push("Email is required");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push("Invalid email format")
    };
    //ตรวจสอบความถูกต้องของข้อมูล
    const allowedCategories = ["Math", "English", "Bigitology"]
    if (category && !allowedCategories.includes(category)) {
        errors.push("category must be one of the following: Math, English, Biology")
    };
    //ตรวจสอบความยาวของข้อมูล
    if (content && (content.length < 500 || content.length > 1000)) {
        errors.push("content must be between 5 and 1000 characters")
    }

    //ส่งข้อมูลกลับ
    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }
    next();
}

export default validateAssignment;