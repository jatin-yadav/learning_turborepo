interface InputPropsType {
    placeholder: string;
    size?: 'small' | 'medium' | 'large';
    onChangeFn: () => void;
}

const TextInput = ({ placeholder, size = 'medium', onChangeFn }: InputPropsType) => {
    const inputSize = size === 'small' ? '30px' : size === 'medium' ? '44px' : '50px';
    return (
        <input type="text" onChange={onChangeFn} style={{ height: inputSize, width: '100%', padding: '12px 10px', fontSize: "24px" }} placeholder={placeholder} />
    )
}

export default TextInput