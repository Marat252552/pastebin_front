import { CheckOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import {useState} from 'react'

const { Search } = Input;



const ClipboardLink = ({ value }: { value: string }) => {

    let [isCopied, setIsCopied] = useState<boolean>(false)

    return <Search
        contentEditable={false}
        value={value}
        suffix={(isCopied)? <CheckOutlined style={{color: 'green'}}/> : undefined}
        enterButton={(isCopied)? 'Скопировано' : ' Скопировать'}
        size="large"
        onSearch={() => {
            navigator.clipboard.writeText(value)
            setIsCopied(true)
        }}
    />
}

export default ClipboardLink;