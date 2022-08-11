import "./form.css";
import React, { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({
    nome: "",
    telefone: "",
    email: "",
    empresa: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const addUser = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Demonstração solicitada!",
      });
      setUser({
        nome: "",
        telefone: "",
        email: "",
        empresa: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Ops! Aconteceu algo errado!",
      });
    }
  };

  function validate() {
    if (!user.nome)
      return setStatus({
        type: "error",
        mensagem: "Opa! É necessário preencher o campo nome!",
      });
    if (!user.telefone)
      return setStatus({
        type: "error",
        mensagem: "Opa! É necessário preencher o campo telefone!",
      });
    if (!user.email)
      return setStatus({
        type: "error",
        mensagem: "Opa! É necessário preencher o campo e-mail!",
      });
    if (!user.empresa)
      return setStatus({
        type: "error",
        mensagem: "Opa! É necessário preencher o campo empresa!",
      });

    return true;
  }

  return (
    <div className="bg">
      <div className="container form-container">
        <div className="row">
          <div className="col form-text">
            <p className="title">
              Aumente a performance da sua equipe com um poderoso discador
              preditivo!
            </p>
            <p className="subtitle">
              Elimine as chamadas improdutivas, e tenha contato com o cliente
              certo!
            </p>
          </div>
          <div className="col">
            <div className="form">
              <form onSubmit={addUser}>
                {status.type === "success" ? (
                  <p style={{ color: "green", marginTop: "20px" }}>
                    {status.mensagem}
                  </p>
                ) : (
                  ""
                )}
                {status.type === "error" ? (
                  <p style={{ color: "#ff0000", marginTop: "20px" }}>
                    {status.mensagem}
                  </p>
                ) : (
                  ""
                )}

                <h3>Preencha o formulário</h3>
                <h2>Solicite uma demonstração gratuita!</h2>
                <div className="itens-form">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome completo"
                    onChange={valueInput}
                    defaultValue={user.nome}
                  />
                  <label>Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="(00)00000-0000"
                    onChange={valueInput}
                    defaultValue={user.telefone}
                  />
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ex: digitalwin@gmail.com"
                    onChange={valueInput}
                    defaultValue={user.email}
                  />
                  <label>Empresa</label>
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nome da sua empresa"
                    onChange={valueInput}
                    defaultValue={user.empresa}
                  />
                  <input type="submit" value="Quero produzir mais!" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
