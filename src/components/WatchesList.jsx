import Watches from "./Watches";
import { nanoid } from "nanoid";

export default function WatchesList({watches, handleDelete}) {
    return(
        <ul>
            {
                watches.map((item) => 
                    <Watches key={nanoid(20)} handleDelete ={() => handleDelete(item.id)} item={item} ></Watches>
                )
            }
        </ul>
    )
}
