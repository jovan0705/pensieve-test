import { useEffect, useMemo } from "react";
import { getDeviceList } from "../store/actionCreators/gpsAction";
import { useDispatch, useSelector } from "react-redux";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import "../assets/style.css";

const DeviceList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deviceList, deviceListLoading } = useSelector(
    (store) => store.rootReducer.gpsReducer
  );

  const list = useMemo(() => {
    return deviceList;
  }, [deviceList]);

  const isLoading = useMemo(() => {
    return deviceListLoading;
  }, [deviceListLoading]);

  useEffect(() => {
    dispatch(getDeviceList());
  }, []);

  return (
    <Box className="deviceListContainer">
      {!isLoading ? (
        <Box>
          <Table className="deviceListTable">
            <Thead>
              <Tr>
                <Th className="headText">Device ID</Th>
                <Th className="headText">See Detail</Th>
              </Tr>
            </Thead>
            <Tbody>
              {list.length > 0 &&
                list.map((el) => {
                  return (
                    <Tr>
                      <Td className="rowText">{el.device_id}</Td>
                      <Td className="rowText">
                        <Button onClick={() => navigate(`/${el.device_id}`)}>
                          Click Here
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Box className="loadingContainer">
          <ReactLoading type={"bubbles"} color="#fff" />
        </Box>
      )}
    </Box>
  );
};

export default DeviceList;
