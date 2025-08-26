Router.get("/edit", async(req, res) => {
    res.render("base", {
        title:"Editar categoria",
        view:"Categorias/edit",
    });
});

module.exports = router;
