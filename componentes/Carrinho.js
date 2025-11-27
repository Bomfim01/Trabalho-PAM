import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Carrinho = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Carrinho</Text>

      <View style={styles.carrinhoVazio}>
        <Text style={styles.icone}>🛒</Text>
        <Text style={styles.textoVazio}>Seu carrinho está vazio</Text>
        <Text style={styles.subtextoVazio}>
          Adicione alguns produtos incríveis!
        </Text>
      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity 
          style={styles.botaoProduto}
          onPress={() => navigation.navigate('Produtos')}
        >
          <Text style={styles.botaoProdutotxt}>Ver Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate('Início')}
        >
          <Text style={styles.botaoVoltartxt}>Voltar ao Início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#2c3e50',
  },
  carrinhoVazio: {
    alignItems: 'center',
    marginBottom: 40,
  },
  icone: {
    fontSize: 60,
    marginBottom: 20,
  },
  textoVazio: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7f8c8d',
    marginBottom: 8,
  },
  subtextoVazio: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
  },
  botoesContainer: {
    alignItems: 'center',
  },
  botaoProduto: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    width: '30%',
    alignItems: 'center',
  },
  botaoProdutotxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
    width: '30%',
    alignItems: 'center',
  },
  botaoVoltartxt: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Carrinho;