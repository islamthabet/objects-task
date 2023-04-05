import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;

  &:focus {
    outline: none;
    border: 2px solid #5e60ce;
    box-shadow: rgba(94, 96, 206, 0.4) 0px 4px 12px 0px;
  }
`

export const Textarea = styled.textarea`
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;

  &:focus {
    outline: none;
    border: 2px solid #5e60ce;
    box-shadow: rgba(94, 96, 206, 0.4) 0px 4px 12px 0px;
  }
`
