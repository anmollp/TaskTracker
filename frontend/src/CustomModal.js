import React, {useState} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default function CustomModal({isShowing, hide, item}) {
    const [activeItem, setActiveItem] = useState(item);

    function handleChange(e) {
        let {name, value} = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const modifiedActiveItem = {...activeItem, [name]: value};
        setActiveItem(modifiedActiveItem);
    }

    function handleSubmit(item) {
        hide();
        alert("save" + JSON.stringify(item));
    }


    return (
        <Modal isOpen={isShowing} toggle={hide}>
            <ModalHeader toggle={hide}>Todo Item</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="todo-title">Title</Label>
                        <Input
                            type="text"
                            id="todo-title"
                            name="title"
                            value={activeItem.title}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter Todo Title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="todo-description">Description</Label>
                        <Input
                            type="text"
                            id="todo-description"
                            name="description"
                            value={activeItem.description}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter Todo description"
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="completed"
                                checked={activeItem.completed}
                                onChange={(e) => handleChange(e)}
                            />
                            Completed
                        </Label>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="success"
                    onClick={() => handleSubmit(activeItem)}
                >
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    )
}