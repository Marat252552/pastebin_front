import { Input } from 'antd';


const { Search } = Input;

// const suffix = (
//     <AudioOutlined
//         style={{
//             fontSize: 16,
//             color: '#1677ff',
//         }}
//     />
// );



const ClipboardLink = ({ value }: { value: string }) => {
    const onSearch = () => {
        navigator.clipboard.writeText(value)
    }
    return <Search
        contentEditable={false}
        value={value}
        enterButton="Скопировать"
        size="large"
        onSearch={onSearch}
    />
}

export default ClipboardLink;