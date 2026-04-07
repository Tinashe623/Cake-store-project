import { Button, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { memo } from 'react'

const languages = [
    { code: 'en', label: 'Eng' },
    { code: 'sn', label: 'Shona', disabled: true, comingSoon: true },
]

const LanguageSwitcher = memo(function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

    const handleChangeLanguage = (code: string, disabled?: boolean) => {
        if (!disabled) {
            i18n.changeLanguage(code)
        }
    }

    return (
        <Menu>
            <MenuButton
                as={Button}
                variant="ghost"
                size="sm"
                fontWeight="700"
                fontSize="xs"
                color="brand.primary"
                bg="transparent"
                border="1px solid"
                borderColor="brand.border"
                borderRadius="full"
                px={3}
                _hover={{
                    bg: 'brand.surface',
                    borderColor: 'brand.accent',
                }}
                rightIcon={<ChevronDownIcon />}
            >
                {currentLang.label}
            </MenuButton>
            <MenuList bg="brand.surface" borderColor="brand.border" minW="auto">
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        onClick={() => handleChangeLanguage(lang.code, lang.disabled)}
                        bg={i18n.language === lang.code ? 'brand.accent' : 'transparent'}
                        color={i18n.language === lang.code ? 'brand.primary' : lang.disabled ? 'gray.400' : 'brand.darkText'}
                        _hover={{ bg: lang.disabled ? 'transparent' : 'brand.accent', color: lang.disabled ? 'gray.400' : 'brand.primary' }}
                        fontWeight="600"
                        fontSize="sm"
                        px={4}
                        cursor={lang.disabled ? 'not-allowed' : 'pointer'}
                        opacity={lang.disabled ? 0.5 : 1}
                    >
                        {lang.label}
                        {lang.comingSoon && (
                            <Text as="span" fontSize="xs" ml={2} color="gray.500">
                                (Coming Soon)
                            </Text>
                        )}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
})

export default LanguageSwitcher
