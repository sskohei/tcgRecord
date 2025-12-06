
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/cards/page";
import AddTagsButtle from "@/components/molecules/addButton/addTags_Buttle/page";
import EditTagButtle from "@/components/molecules/editButton/editTagButtle/page";
import DeleteTagsButtle from "@/components/molecules/deleteButton/deleteTags_Buttle/page";

type Props = {
    id:number,
    tags_buttle:string;
};

function getData():Props[]{
    return[
        {
            id:1,
            tags_buttle:"大会",
        },
        {
            id:2,
            tags_buttle:"練習"
        },
    ]
}

function TagsButtle(){
    const data = getData();

    return(
        <div className="gap-3">
            <AddTagsButtle/>
        <div className="flex m-2 gap-3">
            {data.map((tag:Props)=>(
                <Card key={tag.id} className="w-full max-w-sm gap-3">
                    <CardHeader>
                        <CardTitle>{tag.tags_buttle}</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col gap-2">
                        <EditTagButtle editName={tag.tags_buttle}/>
                        <DeleteTagsButtle deleteName={tag.tags_buttle}/>
                    </CardFooter>
                </Card>
            ))}
        </div>
        </div>
    )
}

export default TagsButtle