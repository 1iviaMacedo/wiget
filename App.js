import React from 'react';
import { View } from 'react-native';
import Cabeçalho from './Cabeçalho';
import Corpo from './Corpo';
import Rodapé from './Rodapé';

//cada parte, devera conter seu import, de modo a chamar o conteudo da pasta para que apareça em uma tela em específico

const App = () => {
return (
<View>
<Cabeçalho />
<Corpo />
<Rodapé />
</View>
);
};
export default App;
