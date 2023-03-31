import styled from "styled-components";

export const Row = styled.div`
display: flex;
`

export const Col = styled.div`
width: calc(100% / 6) - 10px;
margin-top: 1rem;
`

export const Card = styled.div`
width: 200px;
min-height: 400px;
background-color: white;
border: 1px solid black;
border-radius: 10px;
margin: 0 10px;
`

export const Image = styled.img`
height: 200px;
width: 100%;
object-fit: cover;
border-radius: 10px;
`

export const TextContainer = styled.div`
border-top: 1px solid darkgrey;
padding: 1rem;
`

export const MsBox = styled.div`
display: flex;
justify-content: space-between;
`

export const Select = styled.select`
appearance: none;
padding: .5rem 1rem;
border-radius: 5px;
`

export const Button = styled.button`
background-color: #5f729d;
color: white;
padding: .5rem 1rem;
border: none;
border-radius: 5px;
cursor: pointer;
`