import { Card, Skeleton } from "antd"
import SkeletonImage from "antd/es/skeleton/Image"
import SkeletonInput from "antd/es/skeleton/Input"



const Skeletons = () => (
    <>
        <Card title={<p><SkeletonInput size='small' active /></p>}>
            <p><Skeleton active /></p>
        </Card>
        <Card title={<p><SkeletonInput size='small' active /></p>}>
            <p><SkeletonImage active /></p>
        </Card>
    </>
)

export default Skeletons