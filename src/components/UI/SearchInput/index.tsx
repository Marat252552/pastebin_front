import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';


const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

const onSearch = (value: string) => console.log(value);

const SearchInput = () => (
    <Search
        placeholder="Вставьте ссылку"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
    />
);

export default SearchInput;