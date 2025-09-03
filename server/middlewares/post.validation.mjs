export const postValidation = (req, res, next) => {

    function validateEmail(email) {
        // A common regex pattern for email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      }

    const errors = [];

    const categoryList = ["Math", "English", "Biology"].map(category => category.toLowerCase());
    const hasCategory = categoryList.includes(req.body.category?.toLowerCase().trim());
      

    if (!req.body.title?.trim()) {
        errors.push("Title is required");
    } 
    
    if (!req.body.content?.trim()) {
        errors.push("Content is required");
    } 

    if (req.body.content?.length < 500 || req.body.content?.length > 1000) {
        errors.push("Content must be between 500 and 1000 characters");
    }
    
    if (!req.body.category?.trim()) {    
        errors.push("Category is required");
    } 

    if (!hasCategory && req.body.category?.trim()) {
        errors.push("Invalid category");
    } 
    
    if (!req.body.email?.trim()) {
        errors.push("Email is required");
    } 
    
    if (!validateEmail(req.body.email) && req.body.email?.trim()) {
        errors.push("Invalid email address");
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();

}