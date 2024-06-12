import image_one from '../assets/phone_new.png';
import image_two from '../assets/phone_new2.png';

type Banner_image_json_type = {
    id : number
    imageUrl ?: string
}

export const Banner_image_json_data : Banner_image_json_type[] = [
    {
        id : 1,
        imageUrl:image_one
    },
    {
        id : 2,
        imageUrl:image_two
    },
    {
        id : 3,
        imageUrl:""
    }
]