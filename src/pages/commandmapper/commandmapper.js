import CommandMapperTable from '../../components/tables/commandMapperTable'
import { Row, Col } from 'antd';

function commandMapper() {
    return (
        <div>
            <Row gutter={16}>
                <Col className="gutter-row" md={24}>
                    <div className="gutter-box">
                        <CommandMapperTable />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default commandMapper;