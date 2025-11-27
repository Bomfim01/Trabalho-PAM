import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Produtos = () => {
  const navigation = useNavigation();

  const produtos = [
    { id: '1', nome: 'Smartphone', preco: 1500, cor: '#e74c3c' },
    { id: '2', nome: 'Tablet', preco: 800, cor: '#3498db' },
    { id: '3', nome: 'Notebook', preco: 2500, cor: '#2ecc71' },
    { id: '4', nome: 'Fones', preco: 200, cor: '#9b59b6' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Nossos Produtos</Text>

      {produtos.map(produto => (
        <TouchableOpacity 
          key={produto.id}
          style={[styles.produtoCard, { borderLeftColor: produto.cor }]}
        >
          <View style={styles.produtoInfo}>
            <Text style={styles.produtoNome}>{produto.nome}</Text>
            <Text style={styles.produtoPreco}>R$ {produto.preco}</Text>
          </View>
          <View style={[styles.corIndicator, { backgroundColor: produto.cor }]} />
        </TouchableOpacity>
      ))}

      <View style={styles.voltarContainer}>
        <TouchableOpacity 
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate('Início')}
        >
          <Text style={styles.botaoVoltarTexto}>Voltar ao Início</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  produtoCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  produtoInfo: {
    flex: 1,
  },
  produtoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  produtoPreco: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: '600',
  },
  corIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  voltarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  botaoVoltar: {
    backgroundColor: '#7f8c8d',
    padding: 12,
    borderRadius: 6,
    width: '20%',
    alignItems: 'center',
  },
  botaoVoltarTexto: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Produtos;