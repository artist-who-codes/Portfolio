def Encrypt(script):
    script = script.casefold()
    result = ""
    for i in range(0, len(script)):
        char = script[i]
        if(char == 'a'):
            result += "1+"
        elif(char == 'r'):
            result += "2+"
        elif(char == 's'):
            result += "3+"
        elif(char == 'b'):
            result += "4+"
        elif(char == 'q'):
            result += "5+"
        elif(char == 't'):
            result += "6+"
        elif(char == 'c'):
            result += "7+"
        elif(char == 'p'):
            result += "8+"
        elif(char == 'u'):
            result += "9+"
        elif(char == 'd'):
            result += "1-"
        elif(char == 'o'):
            result += "2-"
        elif(char == 'v'):
            result += "3-"
        elif(char == 'e'):
            result += "4-"
        elif(char == 'n'):
            result += "5-"
        elif(char == 'w'):
            result += "6-"
        elif(char == 'f'):
            result += "7-"
        elif(char == 'm'):
            result += "8-"
        elif(char == 'x'):
            result += "9-"
        elif(char == 'g'):
            result += "1*"
        elif(char == 'l'):
            result += "2*"
        elif(char == 'y'):
            result += "3*"
        elif(char == 'h'):
            result += "4*"
        elif(char == 'k'):
            result += "5*"
        elif(char == 'z'):
            result += "6*"
        elif(char == 'i'):
            result += "7*"
        elif(char == 'j'):
            result += "8*"
        elif(char == ' '):
            result += "9*"
        elif(char == '.'):
            result += "0*"
        elif(char == '?'):
            result += "0+"
        elif(char == '!'):
            result += "0-"
        else:
            print("Could not encrypt after this. Follow these rules.\n\t 1. Don't insert newlines\n\t 2. Dont include punctuation marks other than \'.\'(dot), \'?\', \'!\'\n\t 3. Nah.. just 3 sounds better \n Check th resulting string to spot the mistake")
            break
    return(result)


def Decrypt(Script):
    result = ""
    for i in range(0, len(Script), 2):
        char = Script[i]+Script[i+1]
        if(char == '1+'):
            result += 'A'
        elif(char == '2+'):
            result += 'R'
        elif(char == '3+'):
            result += 'S'
        elif(char == '4+'):
            result += 'B'
        elif(char == '5+'):
            result += 'Q'
        elif(char == '6+'):
            result += 'T'
        elif(char == '7+'):
            result += 'C'
        elif(char == '8+'):
            result += 'P'
        elif(char == '9+'):
            result += 'U'
        elif(char == '1-'):
            result += 'D'
        elif(char == '2-'):
            result += 'O'
        elif(char == '3-'):
            result += 'V'
        elif(char == '4-'):
            result += 'E'
        elif(char == '5-'):
            result += 'N'
        elif(char == '6-'):
            result += 'W'
        elif(char == '7-'):
            result += 'F'
        elif(char == '8-'):
            result += 'M'
        elif(char == '9-'):
            result += 'X'
        elif(char == '1*'):
            result += 'G'
        elif(char == '2*'):
            result += 'L'
        elif(char == '3*'):
            result += 'Y'
        elif(char == '4*'):
            result += 'H'
        elif(char == '5*'):
            result += 'K'
        elif(char == '6*'):
            result += 'Z'
        elif(char == '7*'):
            result += 'I'
        elif(char == '8*'):
            result += 'J'
        elif(char == '9*'):
            result += ' '
        elif(char == '0+'):
            result += '?'
        elif(char == '0*'):
            result += '.'
        elif(char == '0-'):
            result += '!'
        else:
            print("Coudnt decrypt. Check the code")
    return(result)


str = input("Enter the string to encode:")
print(Encrypt(str))
