import React, {ReactNode, useState} from 'react';
import { Modal, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children: ReactNode
}

const CustomModal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.close}>✕</Text>
                    </TouchableOpacity>
                    <View>
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    close: {
        fontWeight: '600',
        color: '#FF8F19',
        alignSelf: 'flex-end'
    }
});

export default CustomModal;
