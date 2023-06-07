import { Card, Image } from 'antd';

const ImagesGallery = ({ images_links }: { images_links: string[] }) => (
    <div style={{ width: '100%' }}>
        <Card  title={<p style={{fontSize: '20px', fontFamily: 'Montserrat'}}>Изображения</p>}>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                {images_links.map(image_link => {
                    return <Image style={{ objectFit: 'cover' }} width={100} height={100} src={image_link} />
                })}
            </Image.PreviewGroup>
        </Card>

    </div>

);

export default ImagesGallery;