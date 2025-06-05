import db from "../models/index";

let get_Home_Page = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        })
    }catch(e){
        console.log(e)
    }
}



module.exports = {
    get_Home_Page: get_Home_Page,
}