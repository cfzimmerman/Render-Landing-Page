import { OriginTypes } from "../components/NavBar";

const IsActive = ({
  buttonLabel,
  origin,
}: {
  buttonLabel: OriginTypes;
  origin: OriginTypes;
}) => {
  if (buttonLabel === origin) {
    return true;
  }
  return false;
};

export default IsActive;
