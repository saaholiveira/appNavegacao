import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
App.set("views", Path.join(__dirname,"views"));
App.set("view engine", "ejs");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// ROTA PRINCIPAL
const indexRouter = require("./routes/index");
App.use("/", indexRouter);

//ROTAS PARA CATEGORIAS E PRODUTOS
const categoriaRouter = require("./routes/categorias");
App.use("/categorias", categoriaRouter);

//INICIAR O SERVIÇO E SINCRONIZAR COM O BANCO DE DADOS
App.listen(3000,()=>{
  console.log("Servidor em execução na porta 3000");
});



