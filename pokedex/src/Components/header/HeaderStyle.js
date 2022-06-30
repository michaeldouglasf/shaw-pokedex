import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 16vh;
hr{
    border: 2px solid black;
}
background-color: #f60000;
`

export const DivLeft = styled.div`
display: flex;
align-items: center;
width: 30%;
height: 100%;
background-color: #f60000;
button{
    margin-left: 4vw;
    background-color: white;
    padding: 0.5vw;
    font-weight: 400;
}
button:hover{
    background-color: #3461ad;
    color: white;
    border-color: white;
    border-style: solid;
    cursor: pointer;
}
`
export const DivMid = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40%;
height: 100%;
background-color: #f60000;
img{
    margin-top: 10vh;
    height: 25vh;
    position: relative;
}
`

export const DivRight = styled.div`
/* background-color: black; */
width: 30%;
height: 100%;
background-color: #f60000;
`

export const DivOne = styled.div`
display: flex;
width: 100%;
height: 100%;
`
