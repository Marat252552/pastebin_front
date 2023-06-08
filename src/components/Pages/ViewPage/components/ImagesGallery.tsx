import { Card, Image } from 'antd';
import { Image_T } from '../../../Shared/types';

const ImagesGallery = ({ images }: { images: Image_T[] }) => (
    <div style={{ width: '100%' }}>
        <Card  title={<p style={{fontSize: '20px', fontFamily: 'Montserrat'}}>Изображения</p>}>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                {images.map(image_link => {
                    return <Image style={{ objectFit: 'cover' }} width={100} height={100} src={image_link.link} />
                })}
            </Image.PreviewGroup>
        </Card>

    </div>

);

export default ImagesGallery;