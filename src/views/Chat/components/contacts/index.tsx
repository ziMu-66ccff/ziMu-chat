import { ReactNode, FC, useState, useEffect, useCallback } from 'react';
import { memo } from 'react';
import { toast } from 'react-toastify';
import { toastOptions } from '@/utils/toast';
import { findAllUsers } from '@/store/chat/contacts';
import { ContactsWrapper } from './style';

type IProps = {
  children?: ReactNode;
  currentUser: any;
  handleChangeChat: (Chat: any) => any;
};

const Contacts: FC<IProps> = ({ handleChangeChat, currentUser }) => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [currentSelected, setCurrentSelected] = useState(9999);

  const initData = useCallback(async () => {
    if (currentUser) {
      const contactsData = await findAllUsers(currentUser.username);
      if (!contactsData) {
        toast.error('好友信息获取失败', toastOptions);
        return;
      }
      setContacts(contactsData);
    }
  }, [currentUser]);

  useEffect(() => {
    initData();
  }, [initData]);

  const changeCurrentChat = (index: number, contact: any) => {
    setCurrentSelected(index);
    handleChangeChat(contact);
  };

  return (
    <>
      {currentUser && contacts && (
        <ContactsWrapper>
          <div className="brand">
            <h1>ziMuChat</h1>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    currentSelected === index ? 'selected' : ''
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img src={contact.avatarImage} alt="avatar" />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img src={currentUser.avatarImage} alt="avatar" />
            </div>
            <div className="username">
              <h2>{currentUser.username}</h2>
            </div>
          </div>
        </ContactsWrapper>
      )}
    </>
  );
};

export default memo(Contacts);
