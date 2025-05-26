import { createSystem, defaultConfig } from "@chakra-ui/react";
import config from "./Theme";

const system = createSystem(defaultConfig, config)

export default system;
