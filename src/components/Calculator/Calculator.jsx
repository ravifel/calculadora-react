import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Calculator() {
  const [numero, setNumero] = useState(0);
  const [oldNumero, setOldNumero] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNumero(valor) {
    var input = valor.target.value;
    if (numero === 0) {
      setNumero(input);
    } else {
      setNumero(numero + input);
    }
  }

  function limpar() {
    setNumero(0);
  }

  function mudarSinal() {
    if (numero > 0) {
      setNumero(-numero);
    } else {
      setNumero(Math.abs(numero));
    }
  }

  function porcentagem() {
    setNumero(numero / 100);
  }

  function calcular() {
    if (operator === "/") {
      var divisao = parseFloat(oldNumero) / parseFloat(numero);
      setNumero(divisao);
    } else if (operator === "x") {
      var multiplicacao = parseFloat(oldNumero) * parseFloat(numero);
      setNumero(multiplicacao);
    } else if (operator === "-") {
      var subtracao = parseFloat(oldNumero) - parseFloat(numero);
      setNumero(subtracao);
    } else if (operator === "+") {
      var soma = parseFloat(oldNumero) + parseFloat(numero);
      setNumero(soma);
    }

    console.log(oldNumero);
    console.log(numero);
    console.log(operator);
  }

  function manipuladorOperacao(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNumero(numero);
    setNumero(0);
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="resultado">{numero}</h1>

          <button onClick={limpar}>AC</button>
          <button onClick={mudarSinal}>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="orange" onClick={manipuladorOperacao} value="/">
            /
          </button>

          <button className="gray" onClick={inputNumero} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNumero} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNumero} value={9}>
            9
          </button>
          <button className="orange" onClick={manipuladorOperacao} value="x">
            x
          </button>

          <button className="gray" onClick={inputNumero} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNumero} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNumero} value={6}>
            6
          </button>
          <button className="orange" onClick={manipuladorOperacao} value="-">
            -
          </button>

          <button className="gray" onClick={inputNumero} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNumero} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNumero} value={3}>
            3
          </button>
          <button className="orange" onClick={manipuladorOperacao} value="+">
            +
          </button>

          <button className="gray" onClick={inputNumero} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNumero} value={"."}>
            .
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            o
          </button>
          <button className="orange" onClick={calcular}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
