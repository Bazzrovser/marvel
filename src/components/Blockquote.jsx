import { differences} from "../data"
import Button from "./Button"
import {useState} from "react"


const Null = null ;
export default function Blockquote () {

     const [contentType, setContentType] = useState(null) 
    
    function handleClick (type) {
      setContentType (type)
    }

    return (
<section>

<h1> Цитаты </h1>

<Button isActive={ contentType == "spider"} onClick = {() => handleClick("spider")}>Человек паук</Button>
<Button isActive={ contentType == "tony"} onClick = {() => handleClick("tony")}>Тони Старк </Button>
<Button isActive={ contentType == "cap"} onClick = {() => handleClick("cap")}>Доктор Стрэндж</Button>

{ !contentType && <p>{Null}</p>}
{contentType && 

<div className="">
<blockquote class="blockquote-1">
<p>{differences[contentType]}</p>
	</blockquote>
</div>
}

</section>
    
)}
