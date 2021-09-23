import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./stylesWelcome.css";

export default function Welcome() {
  const history = useHistory();
  const params = useParams();
  // console.log(params);

  return (
    <div className="caixa">
      <h2>{`Bem vinde, ${params.name}!`}</h2>
      <p>Cadastro realizado com sucesso</p>

      <Button variant="outlined" onClick={() => history.push("/")}>
        Sair
      </Button>
    </div>
  );
}
