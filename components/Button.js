import { TouchableOpacity, Text } from "react-native";

const Button = props => {
  const styles = {
    default: "bg-black",
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    danger: "bg-red-500",
  };

  return (
    <TouchableOpacity className={`px-3 py-2 rounded-xl ${props.type ? styles[props.type] : 'bg-black'}`} onPress={props.onPress} activeOpacity={0.8}>
      <Text className="text-white  text-center">{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
