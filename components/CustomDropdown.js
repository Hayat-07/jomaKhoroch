import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";

const CustomDropdown = ({
  options = [],
  selectedValue,
  onSelect,
  placeholder = "Select option",
  dropdownStyle,
  listContainer,
  textStyle,
  itemStyle,
  icon
}) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const buttonRef = useRef(null);

  const openDropdown = () => {
    buttonRef.current.measureInWindow((x, y, width, height) => {
      setPosition({ x, y, width, height });
      setOpen(true);
    });
  };

  return (
    <>
      {/* Dropdown Button */}
      <TouchableOpacity
        ref={buttonRef}
        style={[styles.dropdown, dropdownStyle]}
        onPress={openDropdown}
        activeOpacity={0.8}
      >
        <Text style={[styles.text, textStyle]}>
          {selectedValue || placeholder}
        </Text>
        <View className='justify-center items-center '>
          {icon}
        </View>
      </TouchableOpacity>

      {/* Floating List */}
      <Modal visible={open} transparent animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          {position && (
            <View
              style={[
                styles.listContainer,
                {
                  top: position.y + position.height + 4,
                  left: position.x,
                  width: position.width,
                },
                listContainer
              ]}
            >
              <FlatList
                data={options}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.item, itemStyle]}
                    onPress={() => {
                      onSelect(item);
                      setOpen(false);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </Pressable>
      </Modal>
    </>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    
  },
  text: {
    fontSize: 16,
  },
  overlay: {
    flex: 1,
  },
  listContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 12, // Android
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    maxHeight: 220,
  },
  item: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
