import styled from "styled-components"
import IconsAnswers from "./IconsAnswers"

export default function Footer(props) {
    return (
        <>
            <DivFooter>
                <p data-test="footer">{props.cont}/{props.mock.length} CONCLUÍDOS</p>
                <div>
                    {props.iconsAnswer.map((el)=><IconsAnswers key={el} el={el}/>)}
                </div>
            </DivFooter>
        </>
    )
}

const DivFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 10vh;
    background-color: #ffffff;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }

    div {
        display: flex;
        margin-top: 2px;
    }
`