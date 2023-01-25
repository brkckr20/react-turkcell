import {
    Alert, Box, Button, Image, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { postOrder } from '../../api';
import { useBasket } from '../../context/BasketContext';

const Basket = () => {
    const { items, removeFromBasket, emptyBasket } = useBasket();
    const [address, setAdress] = React.useState("");
    const total = items.reduce((acc, obj) => acc + obj.price, 0);
    const initialRef = React.useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleFormSubmit = async () => {
        const itemIDs = items.map((item) => item._id);
        const input = {
            address,
            items: JSON.stringify(itemIDs)
        }

        await postOrder(input);
        emptyBasket();
        onClose();
    }

    return (
        <div>
            {items.length < 1 && <Alert status="warning"> Sepet boş </Alert>}

            {
                items.length > 0 && <>
                    <ul>
                        {
                            items.map(item => (

                                <li key={item._id} style={{ marginBottom: 10 }}>
                                    <Link to={`product/${item._id}`}>
                                        <Image htmlWidth={200} loading="lazy" src={item.photos[0]} />
                                        {item.title} - {item.price} tl
                                    </Link>
                                    <br />
                                    <Button mt="2" size="sm" colorScheme="red" onClick={() => removeFromBasket(item._id)}>
                                        Remove
                                    </Button>
                                </li>
                            ))
                        }
                    </ul>
                </>
            }

            <Box mt={20}>
                Total : <Text as="span" bg="green.500" borderRadius={4} p={1} color="white">{total} TL</Text>
            </Box>
            <Button mt={2} size="sm" colorScheme="green" onClick={onOpen}>Sipariş Ver</Button>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Alışverişi Tamamla</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Adres : </FormLabel>
                            <Textarea ref={initialRef} placeholder='Adresi giriniz...' value={address} onChange={e => setAdress(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleFormSubmit}>
                            Kaydet
                        </Button>
                        <Button onClick={onClose}>İptal</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Basket