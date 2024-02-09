import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default RouterLink = props => {
  const styles = {
    default: "bg-black",
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    danger: "bg-red-500",
  };

  return (
    <Link href={props.href} asChild>
      <TouchableOpacity activeOpacity={0.8} className={`px-3 py-2 text-white rounded-xl my-4 ${props.type ? styles[props.type] : "bg-black"}`}>
        <Text className="text-center text-white">{props.label}</Text>
      </TouchableOpacity>
    </Link>
  );
};
