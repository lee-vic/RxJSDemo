def LEN(list):
    return len(list)
def INTERSECT(str1,str2):

    list1=str1.split(',')
    print list1
    list2=str2.split(',')
    print list2

    return list(set(list1).intersection(set(list2)))
print INTERSECT("1,2","2,3")
