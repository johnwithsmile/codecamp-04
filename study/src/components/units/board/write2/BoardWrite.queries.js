import{gql} from '@apollo/client'
export const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents: String){ 
    
        createBoard(writer: $writer, title:$title, contents: $contents){ 
          _id
          number
        }
    }
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($number : Int, $title : String, $writer: String, $contents: String){
      updateBoard(number: $number, title: $title, writer: $writer, contents: $contents){
        _id
        number
      }
      
    }
`