import Marquee from "@/components/ui/marquee";
import {fetchContent} from "@croct/plug-next/server";

export default async function Home() {
    const {content: {reviews, ...props}} = await fetchContent('%slot-id%');

    return (
        <Marquee {...props}>
            {reviews.map(review => review.name)}
        </Marquee>
    );
}

