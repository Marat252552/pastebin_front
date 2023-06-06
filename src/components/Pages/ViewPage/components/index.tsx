import { Card, Image } from 'antd';
import { backend_url } from '../../../../config/env';

const ImagesGallery = ({ images_names }: { images_names: string[] }) => (
    <div style={{ width: '100%' }}>
        <Card title='Изображения'>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                {images_names.map(image_name => {
                    return <Image style={{ objectFit: 'cover' }} width={100} height={100} src={backend_url + '/' + image_name} />
                })}
            </Image.PreviewGroup>
        </Card>

    </div>

);

export default ImagesGallery;