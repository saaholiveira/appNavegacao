import { registerRootComponent } from 'expo';

import App from '../App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

const express = require("express");
const router = express.Router();

router.get("/",(req,res) =>{
    res.render("base",{
        title:"Home",
        view:"index",
    });
});

module.exports = router;
