import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const UniversalFormModal = ({
  visible,
  title,
  submitText = "Submit",
  initialValues = {},
  fields = [],
  onClose,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState({});
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues, visible]);

  const handleChange = (name, value) => {
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // simple required validation
    for (let field of fields) {
      if (field.required && !formValues[field.name]) {
        setErrorText(`${field.label} is required`);
        return;
      }
    }

    setErrorText('');
    onSubmit(formValues);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="none">
      <View className="flex-1 justify-center items-center bg-black/80">
        <View className="bg-white w-[85%] rounded-2xl p-6 gap-4">

          <Text className="text-xl font-bold">{title}</Text>

          {fields.map(field => (
            <TextInput
              key={field.name}
              label={field.label}
              value={String(formValues[field.name] ?? '')}
              onChangeText={(text) => handleChange(field.name, text)}
              mode="outlined"
              keyboardType={field.keyboardType || 'default'}
              error={!!errorText}
            />
          ))}

          <HelperText type="error" visible={!!errorText}>
            {errorText}
          </HelperText>

          <View className="flex-row justify-between items-center">
            <Pressable
              onPress={onClose}
              style={styles.btn}
              className="bg-slate-200 flex-row gap-2"
            >
              <MaterialIcons name="cancel" size={22} color="gray" />
              <Text>Cancel</Text>
            </Pressable>

            <Pressable
              onPress={handleSubmit}
              style={styles.btn}
              className="bg-green-600"
            >
              <Text className="text-white font-bold">{submitText}</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default UniversalFormModal;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    minWidth:124,
    height:48,
    justifyContent:"center",
    alignItems:"center"
  },
});
