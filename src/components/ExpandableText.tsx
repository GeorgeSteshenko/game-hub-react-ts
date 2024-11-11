import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 300 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (!children) return null;
  
  if (children.length <= maxChars) return <Text>{children}</Text>;

  const text = isExpanded ? children : children.substring(0, maxChars) + "... ";

  return (
    <div>
      {text}
      <Button size="xs" marginLeft={1} fontWeight="bold" colorScheme="yellow" onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
